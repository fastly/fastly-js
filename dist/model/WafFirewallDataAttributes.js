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
 * The WafFirewallDataAttributes model module.
 * @module model/WafFirewallDataAttributes
 * @version 3.0.0-alpha1
 */
var WafFirewallDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallDataAttributes</code>.
   * @alias module:model/WafFirewallDataAttributes
   */
  function WafFirewallDataAttributes() {
    _classCallCheck(this, WafFirewallDataAttributes);

    WafFirewallDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafFirewallDataAttributes} The populated <code>WafFirewallDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallDataAttributes();

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('prefetch_condition')) {
          obj['prefetch_condition'] = _ApiClient["default"].convertToType(data['prefetch_condition'], 'String');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], 'String');
        }

        if (data.hasOwnProperty('service_version_number')) {
          obj['service_version_number'] = _ApiClient["default"].convertToType(data['service_version_number'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WafFirewallDataAttributes;
}();
/**
 * The status of the firewall.
 * @member {Boolean} disabled
 * @default false
 */


WafFirewallDataAttributes.prototype['disabled'] = false;
/**
 * Name of the corresponding condition object.
 * @member {String} prefetch_condition
 */

WafFirewallDataAttributes.prototype['prefetch_condition'] = undefined;
/**
 * Name of the corresponding response object.
 * @member {String} response
 */

WafFirewallDataAttributes.prototype['response'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} service_version_number
 */

WafFirewallDataAttributes.prototype['service_version_number'] = undefined;
var _default = WafFirewallDataAttributes;
exports["default"] = _default;