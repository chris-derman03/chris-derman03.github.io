function main() {
    let filePath = "data.csv";
    loadData(filePath);
}

function loadData(filePath) {

    let rowConverter = function(d) {
        return {
            player: d.Player,
            team: d.Team,
            kills: +d.Kill,
            deaths: +d.Death,
            kd: +d["K/D"],
            earnings: +d.Earnings,
            role: d.Role,
            hs_p: +d["HS %"]  
        };
    };

    d3.csv(filePath, rowConverter).then(function(data) {
        plot1(data);
        plot2(data);
        plot3(data);
        plot4(data);
    });
};

let plot1=function(data) {

    // Select our SVG
    var svg = d3.select("#p1 .plot .svg_plot");
    var width = +svg.attr("width");
    var height = +svg.attr("height"); 

    // -------------------------------- Draw our Map --------------------------------
        var projection = d3.geoMercator()
            .center([0, 20])
            .scale(128)
            .rotate([-180,0])
            .translate([width/2, height/2]);

        var path = d3.geoPath()
            .projection(projection);

        var g = svg.append("g");

        // load and display the World
        d3.json("world-110m2.json").then(function(topology) {

            g.selectAll("path")
            .data(topojson.feature(topology, topology.objects.countries).features)
            .enter().append("path")
            .attr("d", path)
            .style("fill", "#c5b174");

        });
    // --------------------------------------------------------------------------------------

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3.select("#p4 .plot")
        .append("div")
        .attr("class", "p4_tooltip")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("min-width", "150px")
        .style("position", "fixed");

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
        var info = d3.select(this).datum();
        var player = info.id;
        var team = info.team;
        var country = info.nationality;
        console.log(player)

        tooltip
            .html("Player: " + player + "<br>" + "Team: " + team + "<br>" + "Country of Origin: " + country)
            .style("opacity", 1);
    };
    var mousemove = function(event, d) {
        tooltip
            .style("left", (event.clientX+20) + "px")
            .style("top", (event.clientY) + "px");
    };
    var mouseleave = function(d) {
        tooltip
            .style("opacity", 0);
    };

    // Node Link (Uses custom made .json that I used jupyter notebook python to make)
    d3.json("team_data.json").then(function(team_data) {
        
        // Different player nationalities and teams
        const nationalities = Array.from(new Set(d3.map(team_data.nodes, d=>d.nationality)))
        const teams = Array.from(new Set(d3.map(team_data.nodes, d=>d.team)))

        // Scale to color links based on team
        const teamLinkColor = d3.scaleOrdinal().domain(teams).range(["#13ff00", "#6d953b","#5a8dff","#fa0f00","#f4072c","#ff5900","black","#6aabdc"])

        // Custom svg coordinates for countries alligned with the below country list
        // ['Brazil', 'Argentina', 'USA', 'Canada', 'South Korea', 'Sweeden', 'Latvia', 'International', 'Ukraine', 'United Kingdom', 'Finland', 'France', 'Turkey', 'Belgium', 'Kazakhstan', 'Chile']
        const countryX = [686, 660, 580, 550, 280, 35, 56, 400, 70, 770, 60, 20, 75, 20, 150, 640];
        const countryY = [270, 320, 150, 80, 155, 60, 90, 200, 120, 110, 50, 120, 150, 110, 120, 340]
        // Scales to convert between the two
        const countryScaleX = d3.scaleOrdinal().domain(nationalities).range(countryX);
        const countryScaleY = d3.scaleOrdinal().domain(nationalities).range(countryY);

        // Color each node based on the player's nationality
        const countryColors = ["#009638","#70a7d8","#0a3161","#d52b1e","#004398","#f1c200","#9c2831","#023ca7","#005bbb","gray","#ffffff","#002153","#d70916","#000000","#00a2b8","#d82719"];
        const countryColorScale = d3.scaleOrdinal().domain(nationalities).range(countryColors);

        // Create a d3 forceSimulation
        var simulation = d3.forceSimulation(team_data.nodes)
                                // .force("link", d3.forceLink(team_data.links).distance(d=>linkDistance(d.source.nationality)).id((d) => d.id))
                                // .force("center", d3.forceCenter(width/2, height/2))
                                .force('x', d3.forceX().x(d=>countryScaleX(d.nationality)))
                                .force('y', d3.forceY().y(d=>countryScaleY(d.nationality)))
                                .force("charge", d3.forceManyBody().strength(1))
                                .force("collision", d3.forceCollide().radius(10));

        // Get a node for a given link
        const getNode = function(id) {
            return d3.filter(team_data.nodes, d=>d.id === id)[0];
        }

        // We must wait a second to let the simulation finish
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function wait() {

            // Wait 1 second, then draw links and nodes
            await sleep(1000);

            // Doing this manually because links were pulling nodes away from their correct positions
            var links = svg.selectAll("line").data(team_data.links).enter()
                        .append("line")
                        .attr("class", "line")
                        .attr("x1",d=>getNode(d.source).x)
                        .attr("x2",d=>getNode(d.target).x)
                        .attr("y1",d=>getNode(d.source).y)
                        .attr("y2",d=>getNode(d.target).y)
                        .style("stroke-width", 1)
                        .attr("stroke", "black")
            var nodes = svg.selectAll("circle").data(team_data.nodes).enter()
                        .append("circle")
                        .attr("name", d=>d.id)
                        .attr("r", 7)
                        .style("fill", d=>teamLinkColor(d.team))
                        .attr("z-index", 100)
                        .attr("cx", function (d) { return d.x; })
                        .attr("cy", function(d) { return d.y; })
                    .on("mouseover", mouseover)
                    .on("mousemove", mousemove)
                    .on("mouseleave", mouseleave);

         }
        wait()  
    });
};

let plot2=function(data) {

    // SVG Dimensions
    const margin = {top: 20, right: 20, bottom: 50, left: 60};
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Append our svg
    const svg = d3.select("#p2 .plot").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "svg_plot")
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

    // x and y scales
    const xScale = d3.scaleLinear()
                    .domain([d3.min(data, d=>d.hs_p)-2, d3.max(data, d=>d.hs_p)+2])
                    .range([0, width]);
    const yScale = d3.scaleLinear()
                    .domain([d3.min(data, d=>d.kd)-0.2, d3.max(data, d=>d.kd)+0.2])
                    .range([height, 0]);

     // x and y axes
     const xAxis = svg.append("g").call(d3.axisBottom(xScale))
        .attr("transform", `translate(0, ${height})`);
    const yAxis = svg.append("g").call(d3.axisLeft(yScale))
        .attr("transform", `translate(-0, 0)`);

    // Add our scatterplot points
    const points = svg.selectAll("point").data(data).enter()
                        .append("circle")
                        .attr("cx", d=>xScale(d.hs_p))
                        .attr("cy", d=>yScale(d.kd))
                        .attr("r", 2)
                        .style("fill", "red");

    // Add x axis label
    svg.append("text")
        .attr("text-anchor", "center")
        .attr("x", width/2)
        .attr("y", height + 40)
        .text("HS %");

    // Add y axis labbel
    svg.append("text")
        .attr("text-anchor", "center")
        .attr("x", -height/2)
        .attr("y", -50)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("K/D Ratio");
};

let plot3=function(data) {

    // SVG Dimensions
    const margin = {top: 20, right: 20, bottom: 50, left: 70};
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Append our svg
    const svg = d3.select("#p3 .plot").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "svg_plot")
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

    // x and y scales
    const xScale = d3.scaleLinear()
                    .domain([d3.min(data, d=>d.kd)-0.1, d3.max(data, d=>d.kd)+0.1])
                    .range([0, width]);
    const yScale = d3.scaleLinear()
                    .domain([d3.min(data, d=>d.earnings)-4000, d3.max(data, d=>d.earnings)])
                    .range([height, 0]);

    // x and y axes
    const xAxis = svg.append("g").call(d3.axisBottom(xScale))
        .attr("transform", `translate(0, ${height})`);
    const yAxis = svg.append("g").call(d3.axisLeft(yScale).ticks(5))
        .attr("transform", `translate(-0, 0)`);

    // Add our scatterplot points
    const points = svg.selectAll("point").data(data).enter()
                        .append("circle")
                        .attr("cx", d=>xScale(d.kd))
                        .attr("cy", d=>yScale(d.earnings))
                        .attr("r", 2)
                        .style("fill", "red");

    // Add x axis label
    svg.append("text")
        .attr("text-anchor", "center")
        .attr("x", width/2)
        .attr("y", height + 40)
        .text("K/D Ratio");

    // Add y axis labbel
    svg.append("text")
        .attr("text-anchor", "center")
        .attr("x", -height/2 - 50)
        .attr("y", -60)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Prize Winnings");
};

let plot4=function(data) {

    // ----------------
    // Create a tooltip
    // ----------------
    var tooltip = d3.select("#p4 .plot")
        .append("div")
        .attr("class", "p4_tooltip")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("min-width", "150px")
        .style("position", "fixed");

    // SVG Dimensions
    const margin = {top: 20, right: 20, bottom: 50, left: 60};
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const padding=40;

    // Group by role and take average kd
    data = d3.rollup(data, v=>d3.mean(v, d=>d.kd), d=>d.role);
    data = Object.fromEntries(data);

    // Get array of roles
    const roles = Object.keys(data);

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
        var role = this.getAttribute("class");
        var kd = data[role];

        tooltip
            .html("Role: " + role + "<br>" + "Average KD: " + Math.round(kd * 100) / 100 + "<br>")
            .style("opacity", 1);
    };
    var mousemove = function(event, d) {
        tooltip
            .style("left", (event.clientX+20) + "px")
            .style("top", (event.clientY) + "px");
    };
    var mouseleave = function(d) {
        tooltip
            .style("opacity", 0);
    };

    // Append our svg
    const svg = d3.select("#p4 .plot").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .attr("class", "svg_plot")
                    .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

    // x and y scales
    const xScale = d3.scaleBand()
                    .domain(roles)
                    .range([0, width]);
    const yScale = d3.scaleLinear()
                    .domain([d3.min(Object.values(data))-0.04, d3.max(Object.values(data))])
                    .range([height, 0]);

     // x and y axes
     const xAxis = svg.append("g").call(d3.axisBottom(xScale))
        .attr("transform", `translate(0, ${height})`);
    const yAxis = svg.append("g").call(d3.axisLeft(yScale))
        .attr("transform", `translate(-0, 0)`);

    // Add our scatterplot points
    const points = svg.selectAll("bar").data(roles).enter()
                        .append("rect")
                        .attr("class", d=>d)
                        .attr("x", d=>xScale(d)+18)
                        .attr("y", d=>yScale(data[d]))
                        .attr("height", d=>height-yScale(data[d]))
                        .attr("width", xScale.bandwidth()-padding)
                        .style("fill", "#9c170e")
                    .on("mouseover", mouseover)
                    .on("mousemove", mousemove)
                    .on("mouseleave", mouseleave);

    // Add x axis label
    svg.append("text")
        .attr("text-anchor", "center")
        .attr("x", width/2 - 40)
        .attr("y", height + 40)
        .text("Agent Type");

    // Add y axis labbel
    svg.append("text")
        .attr("text-anchor", "center")
        .attr("x", -height/2 - 30)
        .attr("y", -50)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("K/D Ratio");
};