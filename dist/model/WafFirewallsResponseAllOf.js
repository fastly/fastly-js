"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasWafFirewallVersion = _interopRequireDefault(require("./SchemasWafFirewallVersion"));

var _WafFirewallResponseData = _interopRequireDefault(require("./WafFirewallResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallsResponseAllOf model module.
 * @module model/WafFirewallsResponseAllOf
 * @version 3.0.0-alpha1
 */
var WafFirewallsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallsResponseAllOf</code>.
   * @alias module:model/WafFirewallsResponseAllOf
   */
  function WafFirewallsResponseAllOf() {
    _classCallCheck(this, WafFirewallsResponseAllOf);

    WafFirewallsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/WafFirewallsResponseAllOf} The populated <code>WafFirewallsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafFirewallResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_SchemasWafFirewallVersion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallsResponseAllOf;
}();
/**
 * @member {Array.<module:model/WafFirewallResponseData>} data
 */


WafFirewallsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/SchemasWafFirewallVersion>} included
 */

WafFirewallsResponseAllOf.prototype['included'] = undefined;
var _default = WafFirewallsResponseAllOf;
exports["default"] = _default;