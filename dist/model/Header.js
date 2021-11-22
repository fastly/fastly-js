"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Header model module.
 * @module model/Header
 * @version 3.0.0-alpha1
 */
var Header = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Header</code>.
   * @alias module:model/Header
   */
  function Header() {
    _classCallCheck(this, Header);

    Header.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Header, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Header</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Header} obj Optional instance to populate.
     * @return {module:model/Header} The populated <code>Header</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Header();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('cache_condition')) {
          obj['cache_condition'] = _ApiClient["default"].convertToType(data['cache_condition'], 'String');
        }

        if (data.hasOwnProperty('dst')) {
          obj['dst'] = _ApiClient["default"].convertToType(data['dst'], 'String');
        }

        if (data.hasOwnProperty('ignore_if_set')) {
          obj['ignore_if_set'] = _ApiClient["default"].convertToType(data['ignore_if_set'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }

        if (data.hasOwnProperty('regex')) {
          obj['regex'] = _ApiClient["default"].convertToType(data['regex'], 'String');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
        }

        if (data.hasOwnProperty('src')) {
          obj['src'] = _ApiClient["default"].convertToType(data['src'], 'String');
        }

        if (data.hasOwnProperty('substitution')) {
          obj['substitution'] = _ApiClient["default"].convertToType(data['substitution'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Header;
}();
/**
 * Accepts a string value.
 * @member {module:model/Header.ActionEnum} action
 */


Header.prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

Header.prototype['cache_condition'] = undefined;
/**
 * Header to set.
 * @member {String} dst
 */

Header.prototype['dst'] = undefined;
/**
 * Don't add the header if it is added already. Only applies to 'set' action.
 * @member {Number} ignore_if_set
 */

Header.prototype['ignore_if_set'] = undefined;
/**
 * A handle to refer to this Header object.
 * @member {String} name
 */

Header.prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

Header.prototype['priority'] = 100;
/**
 * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} regex
 */

Header.prototype['regex'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

Header.prototype['request_condition'] = undefined;
/**
 * @member {String} response_condition
 */

Header.prototype['response_condition'] = undefined;
/**
 * Variable to be used as a source for the header content. Does not apply to `delete` action.
 * @member {String} src
 */

Header.prototype['src'] = undefined;
/**
 * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} substitution
 */

Header.prototype['substitution'] = undefined;
/**
 * Accepts a string value.
 * @member {module:model/Header.TypeEnum} type
 */

Header.prototype['type'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

Header['ActionEnum'] = {
  /**
   * value: "set"
   * @const
   */
  "set": "set",

  /**
   * value: "append"
   * @const
   */
  "append": "append",

  /**
   * value: "delete"
   * @const
   */
  "delete": "delete",

  /**
   * value: "regex"
   * @const
   */
  "regex": "regex",

  /**
   * value: "regex_repeat"
   * @const
   */
  "regex_repeat": "regex_repeat"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Header['TypeEnum'] = {
  /**
   * value: "request"
   * @const
   */
  "request": "request",

  /**
   * value: "cache"
   * @const
   */
  "cache": "cache",

  /**
   * value: "response"
   * @const
   */
  "response": "response"
};
var _default = Header;
exports["default"] = _default;