import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGroupData as getGroupDataAction } from '../core/actions/api';
import StaticContent from './StaticContent';
import Layout from './Layout';
import Alert from './Alert';

class ContentContainer extends Component {
  componentDidMount() {
    const { cmsGroupId, getGroupData } = this.props;

    getGroupData(cmsGroupId);
  }

  render() {
    const {
      alerts,
      city,
      cmsGroupId,
      country,
      fellowshipAcronym,
      fellowshipLongName,
      groupDescription,
      name,
      state,
    } = this.props;

    return (
      <Layout name={name}>
        {alerts.map(({ sentiment, content }) => (
          <Alert sentiment={sentiment} content={content} key={content} />
        ))}
        <StaticContent
          city={city}
          cmsGroupId={cmsGroupId}
          country={country}
          fellowshipAcronym={fellowshipAcronym}
          fellowshipLongName={fellowshipLongName}
          groupDescription={groupDescription}
          name={name}
          state={state}
				/>
        {/* @TODO add dynamic content */}
      </Layout>
    );
  }
}

ContentContainer.propTypes = {
  alerts: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cmsGroupId: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  fellowshipAcronym: PropTypes.string.isRequired,
  fellowshipLongName: PropTypes.string.isRequired,
  getGroupData: PropTypes.func.isRequired,
  groupDescription: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export const mapStateToProps = (state, { cmsGroupId }) => ({
  alerts: state.getIn(['requests', 'groups', 'GET', cmsGroupId, 'data', 'alerts'], []),
});

export const mapDispatchToProps = (dispatch) => ({
  getGroupData: (cmsGroupId) => dispatch(getGroupDataAction(cmsGroupId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentContainer);
