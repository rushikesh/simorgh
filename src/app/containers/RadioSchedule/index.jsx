import React, { useContext } from 'react';
import { RequestContext } from '#contexts/RequestContext';
import { ServiceContext } from '#contexts/ServiceContext';
import useToggle from '../Toggle/useToggle';
import Canonical from './Canonical';

// The logic here is sufficient for now for testing locally. This should change once we are ready to put radioschedules on live
const getRadioScheduleEndpoint = (service, environment) =>
  environment === 'test'
    ? `/${service}/bbc_${service}_radio/schedule.json`
    : `/${service}/bbc_${service}_radio/radioschedule.json`;

const RadioScheduleContainer = () => {
  const { isAmp } = useContext(RequestContext);
  const { enabled } = useToggle('radioSchedule');
  const { service, hasRadioSchedule } = useContext(ServiceContext);
  const radioScheduleEnabled = !isAmp && enabled && hasRadioSchedule;

  if (!radioScheduleEnabled) {
    return null;
  }

  const endpoint = getRadioScheduleEndpoint(
    service,
    process.env.SIMORGH_APP_ENV,
  );

  return <Canonical endpoint={endpoint} />;
};

// RadioScheduleContainer.propTypes = {

// };

export default RadioScheduleContainer;
