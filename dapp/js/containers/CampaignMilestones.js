import { connect } from "react-redux";
import Component from "../components/CampaignMilestones";

const mapStateToProps = state => ({
    newMilestones: state.newMilestones,
    accounts: state.web3.accounts,
});

const mapDispatchToProps = ({
});

const CampaignMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default CampaignMilestones;
