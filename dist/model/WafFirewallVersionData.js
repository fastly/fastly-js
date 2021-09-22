"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasWafFirewallVersionDataAttributes = _interopRequireDefault(require("./SchemasWafFirewallVersionDataAttributes"));

var _TypeWafFirewallVersion = _interopRequireDefault(require("./TypeWafFirewallVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallVersionData model module.
 * @module model/WafFirewallVersionData
 * @version 3.0.0-alpha1
 */
var WafFirewallVersionData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallVersionData</code>.
   * @alias module:model/WafFirewallVersionData
   */
  function WafFirewallVersionData() {
    _classCallCheck(this, WafFirewallVersionData);

    WafFirewallVersionData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallVersionData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallVersionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionData} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionData} The populated <code>WafFirewallVersionData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallVersionData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _SchemasWafFirewallVersionDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafFirewallVersion["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallVersionData;
}();
/**
 * @member {module:model/SchemasWafFirewallVersionDataAttributes} attributes
 */


WafFirewallVersionData.prototype['attributes'] = undefined;
/**
 * @member {module:model/TypeWafFirewallVersion} type
 */

WafFirewallVersionData.prototype['type'] = undefined;
var _default = WafFirewallVersionData;
exports["default"] = _default;