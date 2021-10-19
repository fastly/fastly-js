"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafFirewallVersionItem = _interopRequireDefault(require("./IncludedWithWafFirewallVersionItem"));

var _WafFirewallVersionResponseData = _interopRequireDefault(require("./WafFirewallVersionResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallVersionResponse model module.
 * @module model/WafFirewallVersionResponse
 * @version 3.0.0-alpha1
 */
var WafFirewallVersionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallVersionResponse</code>.
   * @alias module:model/WafFirewallVersionResponse
   */
  function WafFirewallVersionResponse() {
    _classCallCheck(this, WafFirewallVersionResponse);

    WafFirewallVersionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallVersionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionResponse} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionResponse} The populated <code>WafFirewallVersionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallVersionResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _WafFirewallVersionResponseData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafFirewallVersionItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallVersionResponse;
}();
/**
 * @member {module:model/WafFirewallVersionResponseData} data
 */


WafFirewallVersionResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafFirewallVersionItem>} included
 */

WafFirewallVersionResponse.prototype['included'] = undefined;
var _default = WafFirewallVersionResponse;
exports["default"] = _default;