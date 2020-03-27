import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

      function handleClickNext() {
        Analytics.track('Paginação', {
          category: 'Próximo',
          label: humanPageNumber        
      })
      }
      function handleClickPrevious() {
        Analytics.track('Paginação', {
          category: 'Anterior',
          label: humanPageNumber        
      })
      }

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev" onClick={handleClickPrevious}>
                            Previous
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">Page {humanPageNumber} of {numberOfPages}</div>}
            <div>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next" onClick={handleClickNext}>
                            Next
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
