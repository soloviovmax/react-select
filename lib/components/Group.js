'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupHeading = exports.groupHeadingCSS = exports.groupCSS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emotion = require('emotion');

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var groupCSS = exports.groupCSS = function groupCSS() {
  return {
    paddingBottom: _theme.spacing.baseUnit * 2,
    paddingTop: _theme.spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      innerProps = props.innerProps;

  return _react2.default.createElement(
    'div',
    _extends({
      className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('group', props)), { 'group': true }, className)
    }, innerProps),
    _react2.default.createElement(
      Heading,
      _extends({ getStyles: getStyles, cx: cx }, headingProps),
      label
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

var groupHeadingCSS = exports.groupHeadingCSS = function groupHeadingCSS() {
  return {
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: _theme.spacing.baseUnit * 3,
    paddingRight: _theme.spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};

var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      cleanProps = _objectWithoutProperties(props, ['className', 'cx', 'getStyles']);

  return _react2.default.createElement('div', _extends({
    className: cx( /*#__PURE__*/(0, _emotion.css)(getStyles('groupHeading', props)), { 'group-heading': true }, className)
  }, cleanProps));
};

exports.GroupHeading = GroupHeading;
exports.default = Group;