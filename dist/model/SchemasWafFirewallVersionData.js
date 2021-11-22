"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafFirewallVersion = _interopRequireDefault(require("./TypeWafFirewallVersion"));

var _WafFirewallVersionDataAttributes = _interopRequireDefault(require("./WafFirewallVersionDataAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SchemasWafFirewallVersionData model module.
 * @module model/SchemasWafFirewallVersionData
 * @version 3.0.0-alpha1
 */
var SchemasWafFirewallVersionData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasWafFirewallVersionData</code>.
   * @alias module:model/SchemasWafFirewallVersionData
   */
  function SchemasWafFirewallVersionData() {
    _classCallCheck(this, SchemasWafFirewallVersionData);

    SchemasWafFirewallVersionData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasWafFirewallVersionData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasWafFirewallVersionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasWafFirewallVersionData} obj Optional instance to populate.
     * @return {module:model/SchemasWafFirewallVersionData} The populated <code>SchemasWafFirewallVersionData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasWafFirewallVersionData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafFirewallVersion["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafFirewallVersionDataAttributes["default"].constructFromObject(data['attributes']);
        }
      }

      return obj;
    }
  }]);

  return SchemasWafFirewallVersionData;
}();
/**
 * @member {module:model/TypeWafFirewallVersion} type
 */


SchemasWafFirewallVersionData.prototype['type'] = undefined;
/**
 * @member {module:model/WafFirewallVersionDataAttributes} attributes
 */

SchemasWafFirewallVersionData.prototype['attributes'] = undefined;
var _default = SchemasWafFirewallVersionData;
exports["default"] = _default;