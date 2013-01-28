Template.graphsPageTemplate.destroyed = function () {
    this.handle && this.handle.stop();
};
Template.graphsPageTemplate.rendered = function () {

    var resize = Session.get("resize");
    self.node = self.find("svg");

    if (! self.handle) {
        self.handle = Meteor.autorun(function(){
            switch(Session.get("selected_graph")){
                case 'sunburst':
                    $('#breadCrumbLink').html('Sunburst');
                    clearGraphs();
                    renderSunburst();
                    break;
                case 'forceDirectGraph':
                    $('#breadCrumbLink').html('Force Directed Graph');
                    clearGraphs();
                    renderForceDirectCollapsible();
                    break;
                case 'powersOfTenChart':
                    $('#breadCrumbLink').html('Powers of Ten');
                    clearGraphs();
                    renderPowersOfTenChart();
                    break;
                case 'collapsibleTreeChart':
                    $('#breadCrumbLink').html('ICD-10 Browser');
                    clearGraphs();
                    renderCollapsibleTreeChart();
                    break;
                case 'objectChildrenChart':
                    $('#breadCrumbLink').html('Object Children');
                    clearGraphs();
                    renderObjectChildrenChart();
                    break;
                case 'flareChart':
                    $('#breadCrumbLink').html('Object Children');
                    clearGraphs();
                    renderFlareChart();
                    break;
                default:
                    $('#breadCrumbLink').html('Object Children');
                    clearGraphs();
                    renderObjectChildrenChart();
                    break;
            }
        });
    };
};

function clearGraphs(){
    $('#chart').html('');
    $('#forceDirectGraph').html('');
    $('#sunburstChart').html('');
    $('#collapsibleTreeChart').html('');
    $('#objectChildrenChart').html('');
    $('#powersOfTenChart').html('');
};