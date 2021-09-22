"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Header = _interopRequireDefault(require("./Header"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HeaderResponse model module.
 * @module model/HeaderResponse
 * @version 3.0.0-alpha1
 */
var HeaderResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HeaderResponse</code>.
   * @alias module:model/HeaderResponse
   */
  function HeaderResponse() {
    _classCallCheck(this, HeaderResponse);

    HeaderResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HeaderResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HeaderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeaderResponse} obj Optional instance to populate.
     * @return {module:model/HeaderResponse} The populated <code>HeaderResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HeaderResponse();

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

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HeaderResponse;
}();
/**
 * Accepts a string value.
 * @member {module:model/HeaderResponse.ActionEnum} action
 */


HeaderResponse.prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

HeaderResponse.prototype['cache_condition'] = undefined;
/**
 * Header to set.
 * @member {String} dst
 */

HeaderResponse.prototype['dst'] = undefined;
/**
 * Don't add the header if it is added already. Only applies to 'set' action.
 * @member {Number} ignore_if_set
 */

HeaderResponse.prototype['ignore_if_set'] = undefined;
/**
 * A handle to refer to this Header object.
 * @member {String} name
 */

HeaderResponse.prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

HeaderResponse.prototype['priority'] = 100;
/**
 * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} regex
 */

HeaderResponse.prototype['regex'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

HeaderResponse.prototype['request_condition'] = undefined;
/**
 * @member {String} response_condition
 */

HeaderResponse.prototype['response_condition'] = undefined;
/**
 * Variable to be used as a source for the header content. Does not apply to `delete` action.
 * @member {String} src
 */

HeaderResponse.prototype['src'] = undefined;
/**
 * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} substitution
 */

HeaderResponse.prototype['substitution'] = undefined;
/**
 * Accepts a string value.
 * @member {module:model/HeaderResponse.TypeEnum} type
 */

HeaderResponse.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

HeaderResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

HeaderResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

HeaderResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

HeaderResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

HeaderResponse.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

HeaderResponse['ActionEnum'] = {
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

HeaderResponse['TypeEnum'] = {
  /**
   * value: "request"
   * @const
   */
  "request": "request",

  /**
   * value: "fetch"
   * @const
   */
  "fetch": "fetch",

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
var _default = HeaderResponse;
exports["default"] = _default;