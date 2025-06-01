'use strict';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

const Button = ({
  children,
  className = '',
  ...props
}) => /*#__PURE__*/React.createElement("button", _extends({
  className: `btn ${className}`
}, props), children);

exports.Button = Button;
//# sourceMappingURL=index.js.map
