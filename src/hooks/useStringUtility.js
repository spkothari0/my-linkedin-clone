import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function useStringUtility(initialStr) {
  const [str, setStr] = useState(initialStr);

  const setInitials = () => {
    setStr(p => GetInitials(p))
  }

  // useEffect(() => {
  //   setStr(p => GetInitials(p))
  // }, [])

  return [str, setInitials];
}

useStringUtility.propTypes = {
  str: PropTypes.string
}

export default useStringUtility

function GetInitials(n) {
  let names = n.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

