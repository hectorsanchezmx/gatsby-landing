import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import './pricingTable.scss'
import { features } from '../../constants'

const PricingTable = ({ plans }) => (
  <div className="pricing-table">
    {
      plans.map((plan) => (
        <div key={plan.name} className={`plan ${plan.featured ? 'plan--featured' : ''}`}>
          <div className="plan-section">
            <span className="plan__title">{ plan.title }</span>
            <span className="plan__description">{ plan.description }</span>
          </div>
          <div className="plan-section">
            <span className="plan__price">{ plan.price }</span>
            <span className="plan__priceDescription">{ plan.priceDescription }</span>
            <span className="plan__promoText">{ plan.promoText }</span>
          </div>
          <div className="plan-section plan-section--last">
            <ul>
              { 
                plan.features.included.map((feature) => (
                  <li key={ feature } className="feature feature--included">{ features[feature] }</li>
                ))
              }
              { 
                plan.features.notIncluded.map((feature) => (
                  <li key={ feature } className="feature feature--notIncluded">{ features[feature] }</li>
                ))
              }
            </ul>
            <Link className={`btn ${plan.featured ? 'btn--hightlighted' : 'btn--default'}`} to={plan.link}>Get started</Link>
          </div>
        </div>
      ))
    } 
  </div>
)

PricingTable.propTypes = {
}

PricingTable.defaultProps = {
}

export default PricingTable
