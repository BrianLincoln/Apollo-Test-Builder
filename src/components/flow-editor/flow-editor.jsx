import React from 'react';
import StepList from './step-list/step-list';
import FlowResult from './flow-result';

class FlowEditor extends React.Component {
    constructor(props) {
        super(props);
        this.showNameChangeForm = this.showNameChangeForm.bind(this);

        this.state = {
            isNameEditable: false,
            name: props.flow.name,
            steps: props.flow.steps
        };
    }
    showNameChangeForm () {
        this.setState({ isNameEditable: true });
    }
    render() {
        return (
            <div className="flow-editor">
                <div className="page-header text-center">
                    <h1><span className="fa fa-arrows-v" /> {this.props.flow.name}</h1>
                    <a className="btn btn-default btn-sm" href="/flows"><span className="fa fa-angle-left" /> Flows</a>
                    <a className="btn btn-default btn-sm" href="/logout" >Logout</a>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary" onClick={this.props.actions.runTest.bind(this, this.props.flow.id)}>Run Test</button>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <StepList actions={this.props.actions} flowId={this.props.flow.id} steps={this.props.flow.steps} />
                        <button className="btn btn-primary" onClick={this.props.actions.addStep.bind(this, this.props.flow.id)}>+ new step</button>
                    </div>
                    <FlowResult flow={this.props.flow} />
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <a className="btn btn-danger btn-sm" href={'/flow/' + this.props.flow.id + '/delete'}><span className="fa fa-trash" /> Delete Flow</a>
                    </div>
                </div>
            </div>
        );
    }
}

FlowEditor.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired
};

export default FlowEditor;
