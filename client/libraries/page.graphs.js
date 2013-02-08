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
                    $('#breadCrumbLink').html('Sunburst Chart');
                    clearGraphs();
                    renderSunburst();
                    break;
                case 'forceDirectGraph':
                    $('#breadCrumbLink').html('Force Directed Graph Chart');
                    clearGraphs();
                    renderForceDirectCollapsible();
                    break;
                case 'collapsibleTreeChart':
                    $('#breadCrumbLink').html('Collapsible Tree Chart');
                    clearGraphs();
                    renderCollapsibleTreeChart();
                    break;
                default:
                    $('#breadCrumbLink').html('Collapsible Tree Chart');
                    clearGraphs();
                    renderCollapsibleTreeChart();
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