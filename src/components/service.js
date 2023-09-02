import React from 'react'

import PropTypes from 'prop-types'

import './service.css'

const Service = (props) => {
  return (
    <div className={`service-service ${props.rootClassName} `}>
      <h3 className="service-title">{props.Title}</h3>
      <span className="service-description">{props.Description}</span>
    </div>
  )
}

Service.defaultProps = {
  Title: 'Computer Repairs',
  rootClassName: '',
  Description:
    'We provide fast and reliable computer repairs for all kinds of issues, such as hardware failures, software errors, virus infections and more. We can fix your computer on-site or remotely, depending on the problem and your preference. We also offer preventive maintenance and optimization services to keep your computer running smoothly and securely',
}

Service.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
}

export default Service
