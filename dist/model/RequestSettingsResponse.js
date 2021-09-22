"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestSettings = _interopRequireDefault(require("./RequestSettings"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestSettingsResponse model module.
 * @module model/RequestSettingsResponse
 * @version 3.0.0-alpha1
 */
var RequestSettingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestSettingsResponse</code>.
   * @alias module:model/RequestSettingsResponse
   */
  function RequestSettingsResponse() {
    _classCallCheck(this, RequestSettingsResponse);

    RequestSettingsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestSettingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSettingsResponse} obj Optional instance to populate.
     * @return {module:model/RequestSettingsResponse} The populated <code>RequestSettingsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestSettingsResponse();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('bypass_busy_wait')) {
          obj['bypass_busy_wait'] = _ApiClient["default"].convertToType(data['bypass_busy_wait'], 'Number');
        }

        if (data.hasOwnProperty('default_host')) {
          obj['default_host'] = _ApiClient["default"].convertToType(data['default_host'], 'String');
        }

        if (data.hasOwnProperty('force_miss')) {
          obj['force_miss'] = _ApiClient["default"].convertToType(data['force_miss'], 'Number');
        }

        if (data.hasOwnProperty('force_ssl')) {
          obj['force_ssl'] = _ApiClient["default"].convertToType(data['force_ssl'], 'Number');
        }

        if (data.hasOwnProperty('geo_headers')) {
          obj['geo_headers'] = _ApiClient["default"].convertToType(data['geo_headers'], 'Number');
        }

        if (data.hasOwnProperty('hash_keys')) {
          obj['hash_keys'] = _ApiClient["default"].convertToType(data['hash_keys'], 'String');
        }

        if (data.hasOwnProperty('max_stale_age')) {
          obj['max_stale_age'] = _ApiClient["default"].convertToType(data['max_stale_age'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('timer_support')) {
          obj['timer_support'] = _ApiClient["default"].convertToType(data['timer_support'], 'Number');
        }

        if (data.hasOwnProperty('xff')) {
          obj['xff'] = _ApiClient["default"].convertToType(data['xff'], 'String');
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

  return RequestSettingsResponse;
}();
/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/RequestSettingsResponse.ActionEnum} action
 */


RequestSettingsResponse.prototype['action'] = undefined;
/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {Number} bypass_busy_wait
 */

RequestSettingsResponse.prototype['bypass_busy_wait'] = undefined;
/**
 * Sets the host header.
 * @member {String} default_host
 */

RequestSettingsResponse.prototype['default_host'] = undefined;
/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {Number} force_miss
 */

RequestSettingsResponse.prototype['force_miss'] = undefined;
/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {Number} force_ssl
 */

RequestSettingsResponse.prototype['force_ssl'] = undefined;
/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {Number} geo_headers
 */

RequestSettingsResponse.prototype['geo_headers'] = undefined;
/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */

RequestSettingsResponse.prototype['hash_keys'] = undefined;
/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {Number} max_stale_age
 */

RequestSettingsResponse.prototype['max_stale_age'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

RequestSettingsResponse.prototype['name'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

RequestSettingsResponse.prototype['request_condition'] = undefined;
/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {Number} timer_support
 */

RequestSettingsResponse.prototype['timer_support'] = undefined;
/**
 * Short for X-Forwarded-For.
 * @member {module:model/RequestSettingsResponse.XffEnum} xff
 */

RequestSettingsResponse.prototype['xff'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

RequestSettingsResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

RequestSettingsResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

RequestSettingsResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

RequestSettingsResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

RequestSettingsResponse.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

RequestSettingsResponse['ActionEnum'] = {
  /**
   * value: "lookup"
   * @const
   */
  "lookup": "lookup",

  /**
   * value: "pass"
   * @const
   */
  "pass": "pass"
};
/**
 * Allowed values for the <code>xff</code> property.
 * @enum {String}
 * @readonly
 */

RequestSettingsResponse['XffEnum'] = {
  /**
   * value: "clear"
   * @const
   */
  "clear": "clear",

  /**
   * value: "leave"
   * @const
   */
  "leave": "leave",

  /**
   * value: "append"
   * @const
   */
  "append": "append",

  /**
   * value: "append_all"
   * @const
   */
  "append_all": "append_all",

  /**
   * value: "overwrite"
   * @const
   */
  "overwrite": "overwrite"
};
var _default = RequestSettingsResponse;
exports["default"] = _default;