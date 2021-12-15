import Layout from "./src/templates/index.js"
import React from 'react';
const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Layout>
        {element}
      </Layout>
    </>
  )
}
export default wrapPageElement