import React from 'react'

const privacy = () => {
  return (
    <div style={container}>
      <div name="termly-embed" data-id="b0fc812f-8d0c-4d9d-9268-01edd1af11d9" data-type="iframe"></div>
      <script type="text/javascript">{(function(d, s, id) {
        var js, tjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://app.termly.io/embed-policy.min.js";
        tjs.parentNode.insertBefore(js, tjs);
      }(document, 'script', 'termly-jssdk'))}</script>
    </div>
  )
}

//styles
const container = {
  padding: 20
}

export default privacy

