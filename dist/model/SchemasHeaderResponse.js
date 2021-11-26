"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasHeader = _interopRequireDefault(require("./SchemasHeader"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasHeaderResponse model module.
 * @module model/SchemasHeaderResponse
 * @version 3.0.0-alpha1
 */
var SchemasHeaderResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasHeaderResponse</code>.
   * @alias module:model/SchemasHeaderResponse
   * @implements module:model/SchemasHeader
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function SchemasHeaderResponse() {
    _classCallCheck(this, SchemasHeaderResponse);

    _SchemasHeader["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    SchemasHeaderResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasHeaderResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasHeaderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasHeaderResponse} obj Optional instance to populate.
     * @return {module:model/SchemasHeaderResponse} The populated <code>SchemasHeaderResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasHeaderResponse();

        _SchemasHeader["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

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

  return SchemasHeaderResponse;
}();
/**
 * Accepts a string value.
 * @member {module:model/SchemasHeaderResponse.ActionEnum} action
 */


SchemasHeaderResponse.prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

SchemasHeaderResponse.prototype['cache_condition'] = undefined;
/**
 * Header to set.
 * @member {String} dst
 */

SchemasHeaderResponse.prototype['dst'] = undefined;
/**
 * Don't add the header if it is added already. Only applies to 'set' action.
 * @member {Number} ignore_if_set
 */

SchemasHeaderResponse.prototype['ignore_if_set'] = undefined;
/**
 * A handle to refer to this Header object.
 * @member {String} name
 */

SchemasHeaderResponse.prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

SchemasHeaderResponse.prototype['priority'] = 100;
/**
 * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} regex
 */

SchemasHeaderResponse.prototype['regex'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

SchemasHeaderResponse.prototype['request_condition'] = undefined;
/**
 * @member {String} response_condition
 */

SchemasHeaderResponse.prototype['response_condition'] = undefined;
/**
 * Variable to be used as a source for the header content. Does not apply to `delete` action.
 * @member {String} src
 */

SchemasHeaderResponse.prototype['src'] = undefined;
/**
 * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} substitution
 */

SchemasHeaderResponse.prototype['substitution'] = undefined;
/**
 * Accepts a string value.
 * @member {module:model/SchemasHeaderResponse.TypeEnum} type
 */

SchemasHeaderResponse.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SchemasHeaderResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

SchemasHeaderResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

SchemasHeaderResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

SchemasHeaderResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

SchemasHeaderResponse.prototype['updated_at'] = undefined; // Implement SchemasHeader interface:

/**
 * Accepts a string value.
 * @member {module:model/SchemasHeader.ActionEnum} action
 */

_SchemasHeader["default"].prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

_SchemasHeader["default"].prototype['cache_condition'] = undefined;
/**
 * Header to set.
 * @member {String} dst
 */

_SchemasHeader["default"].prototype['dst'] = undefined;
/**
 * Don't add the header if it is added already. Only applies to 'set' action.
 * @member {Number} ignore_if_set
 */

_SchemasHeader["default"].prototype['ignore_if_set'] = undefined;
/**
 * A handle to refer to this Header object.
 * @member {String} name
 */

_SchemasHeader["default"].prototype['name'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {Number} priority
 * @default 100
 */

_SchemasHeader["default"].prototype['priority'] = 100;
/**
 * Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} regex
 */

_SchemasHeader["default"].prototype['regex'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

_SchemasHeader["default"].prototype['request_condition'] = undefined;
/**
 * @member {String} response_condition
 */

_SchemasHeader["default"].prototype['response_condition'] = undefined;
/**
 * Variable to be used as a source for the header content. Does not apply to `delete` action.
 * @member {String} src
 */

_SchemasHeader["default"].prototype['src'] = undefined;
/**
 * Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
 * @member {String} substitution
 */

_SchemasHeader["default"].prototype['substitution'] = undefined;
/**
 * Accepts a string value.
 * @member {module:model/SchemasHeader.TypeEnum} type
 */

_SchemasHeader["default"].prototype['type'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

SchemasHeaderResponse['ActionEnum'] = {
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

SchemasHeaderResponse['TypeEnum'] = {
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
var _default = SchemasHeaderResponse;
exports["default"] = _default;