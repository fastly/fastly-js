"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasRequestSettings = _interopRequireDefault(require("./SchemasRequestSettings"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasRequestSettingsResponse model module.
 * @module model/SchemasRequestSettingsResponse
 * @version 3.0.0-alpha1
 */
var SchemasRequestSettingsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasRequestSettingsResponse</code>.
   * @alias module:model/SchemasRequestSettingsResponse
   * @implements module:model/SchemasRequestSettings
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function SchemasRequestSettingsResponse() {
    _classCallCheck(this, SchemasRequestSettingsResponse);

    _SchemasRequestSettings["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    SchemasRequestSettingsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasRequestSettingsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasRequestSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasRequestSettingsResponse} obj Optional instance to populate.
     * @return {module:model/SchemasRequestSettingsResponse} The populated <code>SchemasRequestSettingsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasRequestSettingsResponse();

        _SchemasRequestSettings["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

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

  return SchemasRequestSettingsResponse;
}();
/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/SchemasRequestSettingsResponse.ActionEnum} action
 */


SchemasRequestSettingsResponse.prototype['action'] = undefined;
/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {Number} bypass_busy_wait
 */

SchemasRequestSettingsResponse.prototype['bypass_busy_wait'] = undefined;
/**
 * Sets the host header.
 * @member {String} default_host
 */

SchemasRequestSettingsResponse.prototype['default_host'] = undefined;
/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {Number} force_miss
 */

SchemasRequestSettingsResponse.prototype['force_miss'] = undefined;
/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {Number} force_ssl
 */

SchemasRequestSettingsResponse.prototype['force_ssl'] = undefined;
/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {Number} geo_headers
 */

SchemasRequestSettingsResponse.prototype['geo_headers'] = undefined;
/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */

SchemasRequestSettingsResponse.prototype['hash_keys'] = undefined;
/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {Number} max_stale_age
 */

SchemasRequestSettingsResponse.prototype['max_stale_age'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

SchemasRequestSettingsResponse.prototype['name'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

SchemasRequestSettingsResponse.prototype['request_condition'] = undefined;
/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {Number} timer_support
 */

SchemasRequestSettingsResponse.prototype['timer_support'] = undefined;
/**
 * Short for X-Forwarded-For.
 * @member {module:model/SchemasRequestSettingsResponse.XffEnum} xff
 */

SchemasRequestSettingsResponse.prototype['xff'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SchemasRequestSettingsResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

SchemasRequestSettingsResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

SchemasRequestSettingsResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

SchemasRequestSettingsResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

SchemasRequestSettingsResponse.prototype['updated_at'] = undefined; // Implement SchemasRequestSettings interface:

/**
 * Allows you to terminate request handling and immediately perform an action.
 * @member {module:model/SchemasRequestSettings.ActionEnum} action
 */

_SchemasRequestSettings["default"].prototype['action'] = undefined;
/**
 * Disable collapsed forwarding, so you don't wait for other objects to origin.
 * @member {Number} bypass_busy_wait
 */

_SchemasRequestSettings["default"].prototype['bypass_busy_wait'] = undefined;
/**
 * Sets the host header.
 * @member {String} default_host
 */

_SchemasRequestSettings["default"].prototype['default_host'] = undefined;
/**
 * Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
 * @member {Number} force_miss
 */

_SchemasRequestSettings["default"].prototype['force_miss'] = undefined;
/**
 * Forces the request use SSL (redirects a non-SSL to SSL).
 * @member {Number} force_ssl
 */

_SchemasRequestSettings["default"].prototype['force_ssl'] = undefined;
/**
 * Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
 * @member {Number} geo_headers
 */

_SchemasRequestSettings["default"].prototype['geo_headers'] = undefined;
/**
 * Comma separated list of varnish request object fields that should be in the hash key.
 * @member {String} hash_keys
 */

_SchemasRequestSettings["default"].prototype['hash_keys'] = undefined;
/**
 * How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
 * @member {Number} max_stale_age
 */

_SchemasRequestSettings["default"].prototype['max_stale_age'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

_SchemasRequestSettings["default"].prototype['name'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

_SchemasRequestSettings["default"].prototype['request_condition'] = undefined;
/**
 * Injects the X-Timer info into the request for viewing origin fetch durations.
 * @member {Number} timer_support
 */

_SchemasRequestSettings["default"].prototype['timer_support'] = undefined;
/**
 * Short for X-Forwarded-For.
 * @member {module:model/SchemasRequestSettings.XffEnum} xff
 */

_SchemasRequestSettings["default"].prototype['xff'] = undefined; // Implement ServiceIdAndVersion interface:

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

SchemasRequestSettingsResponse['ActionEnum'] = {
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

SchemasRequestSettingsResponse['XffEnum'] = {
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
var _default = SchemasRequestSettingsResponse;
exports["default"] = _default;