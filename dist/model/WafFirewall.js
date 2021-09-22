"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WafFirewallData = _interopRequireDefault(require("./WafFirewallData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewall model module.
 * @module model/WafFirewall
 * @version 3.0.0-alpha1
 */
var WafFirewall = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewall</code>.
   * @alias module:model/WafFirewall
   */
  function WafFirewall() {
    _classCallCheck(this, WafFirewall);

    WafFirewall.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewall, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewall} obj Optional instance to populate.
     * @return {module:model/WafFirewall} The populated <code>WafFirewall</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewall();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _WafFirewallData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return WafFirewall;
}();
/**
 * @member {module:model/WafFirewallData} data
 */


WafFirewall.prototype['data'] = undefined;
var _default = WafFirewall;
exports["default"] = _default;