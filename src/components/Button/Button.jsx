import React from 'react'
import style from "./Button.module.css"
import PropTypes from 'prop-types';


export default function Button({onLoadMore}) {
  return (
    <div className={style.btn}>
    <button type="button" className={style.button} onClick={onLoadMore}>Load more</button>
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};