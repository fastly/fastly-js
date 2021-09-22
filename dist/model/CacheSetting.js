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
 * The CacheSetting model module.
 * @module model/CacheSetting
 * @version 3.0.0-alpha1
 */
var CacheSetting = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CacheSetting</code>.
   * @alias module:model/CacheSetting
   */
  function CacheSetting() {
    _classCallCheck(this, CacheSetting);

    CacheSetting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CacheSetting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CacheSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CacheSetting} obj Optional instance to populate.
     * @return {module:model/CacheSetting} The populated <code>CacheSetting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CacheSetting();

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
      }

      return obj;
    }
  }]);

  return CacheSetting;
}();
/**
 * If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
 * @member {module:model/CacheSetting.ActionEnum} action
 */


CacheSetting.prototype['action'] = undefined;
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */

CacheSetting.prototype['cache_condition'] = undefined;
/**
 * Name for the cache settings object.
 * @member {String} name
 */

CacheSetting.prototype['name'] = undefined;
/**
 * Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
 * @member {Number} stale_ttl
 */

CacheSetting.prototype['stale_ttl'] = undefined;
/**
 * Maximum time to consider the object fresh in the cache (the cache 'time to live').
 * @member {Number} ttl
 */

CacheSetting.prototype['ttl'] = undefined;
/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */

CacheSetting['ActionEnum'] = {
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
var _default = CacheSetting;
exports["default"] = _default;