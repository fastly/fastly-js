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
 * The RequestSettings model module.
 * @module model/RequestSettings
 * @version 3.0.0-alpha1
 */
var RequestSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestSettings</code>.
   * @alias module:model/RequestSettings
   */
  function RequestSettings() {
    _classCallCheck(this, RequestSettings);

    RequestSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSettings} obj Optional instance to populate.
     * @return {module:model/RequestSettings} The populated <code>RequestSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestSettings();

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
      }

      return obj;
    }
  }]);

  return RequestSettings;
}();
/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/RequestSettings.ActionEnum} action
 */


RequestSettings.prototype['action'] = undefined;
/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {Number} bypass_busy_wait
 */

RequestSettings.prototype['bypass_busy_wait'] = undefined;
/**
 * Sets the host header.
 * @member {String} default_host
 */

RequestSettings.prototype['default_host'] = undefined;
/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {Number} force_miss
 */

RequestSettings.prototype['force_miss'] = undefined;
/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {Number} force_ssl
 */

RequestSettings.prototype['force_ssl'] = undefined;
/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {Number} geo_headers
 */

RequestSettings.prototype['geo_headers'] = undefined;
/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */

RequestSettings.prototype['hash_keys'] = undefined;
/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {Number} max_stale_age
 */

RequestSettings.prototype['max_stale_age'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

RequestSettings.prototype['name'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

RequestSettings.prototype['request_condition'] = undefined;
/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {Number} timer_support
 */

RequestSettings.prototype['timer_support'] = undefined;
/**
 * Short for X-Forwarded-For.
 * @member {module:model/RequestSettings.XffEnum} xff
 */

RequestSettings.prototype['xff'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

RequestSettings['ActionEnum'] = {
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

RequestSettings['XffEnum'] = {
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
var _default = RequestSettings;
exports["default"] = _default;