"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChartDatetimeText = LineChartDatetimeText;
var React = _interopRequireWildcard(require("react"));
var _useDatetime = require("./useDatetime");
var _AnimatedText = require("../../components/AnimatedText");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
LineChartDatetimeText.displayName = 'LineChartDatetimeText';
function LineChartDatetimeText({
  locale,
  options,
  format,
  variant = 'formatted',
  style
}) {
  const datetime = (0, _useDatetime.useLineChartDatetime)({
    format,
    locale,
    options
  });
  return /*#__PURE__*/React.createElement(_AnimatedText.AnimatedText, {
    text: datetime[variant],
    style: style
  });
}
//# sourceMappingURL=DatetimeText.js.map