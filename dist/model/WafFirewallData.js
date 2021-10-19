"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafFirewall = _interopRequireDefault(require("./TypeWafFirewall"));

var _WafFirewallDataAttributes = _interopRequireDefault(require("./WafFirewallDataAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallData model module.
 * @module model/WafFirewallData
 * @version 3.0.0-alpha1
 */
var WafFirewallData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallData</code>.
   * @alias module:model/WafFirewallData
   */
  function WafFirewallData() {
    _classCallCheck(this, WafFirewallData);

    WafFirewallData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallData} obj Optional instance to populate.
     * @return {module:model/WafFirewallData} The populated <code>WafFirewallData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafFirewallDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafFirewall["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallData;
}();
/**
 * @member {module:model/WafFirewallDataAttributes} attributes
 */


WafFirewallData.prototype['attributes'] = undefined;
/**
 * @member {module:model/TypeWafFirewall} type
 */

WafFirewallData.prototype['type'] = undefined;
var _default = WafFirewallData;
exports["default"] = _default;