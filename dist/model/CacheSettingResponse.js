"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CacheSetting = _interopRequireDefault(require("./CacheSetting"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CacheSettingResponse model module.
 * @module model/CacheSettingResponse
 * @version 3.0.0-alpha1
 */
var CacheSettingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CacheSettingResponse</code>.
   * @alias module:model/CacheSettingResponse
   * @implements module:model/CacheSetting
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/Timestamps
   */
  function CacheSettingResponse() {
    _classCallCheck(this, CacheSettingResponse);

    _CacheSetting["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    CacheSettingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CacheSettingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CacheSettingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CacheSettingResponse} obj Optional instance to populate.
     * @return {module:model/CacheSettingResponse} The populated <code>CacheSettingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CacheSettingResponse();

        _CacheSetting["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('cache_condition')) {
          obj['cache_condition'] = _ApiClient["default"].convertToType(data['cache_condition'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('stale_ttl')) {
          obj['stale_ttl'] = _ApiClient["default"].convertToType(data['stale_ttl'], 'Number');
        }

        if (data.hasOwnProperty('ttl')) {
          obj['ttl'] = _ApiClient["default"].convertToType(data['ttl'], 'Number');
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

  return CacheSettingResponse;
}();
/**
 * If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
 * @member {module:model/CacheSettingResponse.ActionEnum} action
 */


CacheSettingResponse.prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

CacheSettingResponse.prototype['cache_condition'] = undefined;
/**
 * Name for the cache settings object.
 * @member {String} name
 */

CacheSettingResponse.prototype['name'] = undefined;
/**
 * Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
 * @member {Number} stale_ttl
 */

CacheSettingResponse.prototype['stale_ttl'] = undefined;
/**
 * Maximum time to consider the object fresh in the cache (the cache 'time to live').
 * @member {Number} ttl
 */

CacheSettingResponse.prototype['ttl'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

CacheSettingResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

CacheSettingResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

CacheSettingResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

CacheSettingResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

CacheSettingResponse.prototype['updated_at'] = undefined; // Implement CacheSetting interface:

/**
 * If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
 * @member {module:model/CacheSetting.ActionEnum} action
 */

_CacheSetting["default"].prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

_CacheSetting["default"].prototype['cache_condition'] = undefined;
/**
 * Name for the cache settings object.
 * @member {String} name
 */

_CacheSetting["default"].prototype['name'] = undefined;
/**
 * Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
 * @member {Number} stale_ttl
 */

_CacheSetting["default"].prototype['stale_ttl'] = undefined;
/**
 * Maximum time to consider the object fresh in the cache (the cache 'time to live').
 * @member {Number} ttl
 */

_CacheSetting["default"].prototype['ttl'] = undefined; // Implement ServiceIdAndVersion interface:

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

CacheSettingResponse['ActionEnum'] = {
  /**
   * value: "pass"
   * @const
   */
  "pass": "pass",

  /**
   * value: "deliver"
   * @const
   */
  "deliver": "deliver",

  /**
   * value: "restart"
   * @const
   */
  "restart": "restart"
};
var _default = CacheSettingResponse;
exports["default"] = _default;