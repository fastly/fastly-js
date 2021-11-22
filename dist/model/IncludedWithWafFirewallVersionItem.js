"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasWafFirewallVersion = _interopRequireDefault(require("./SchemasWafFirewallVersion"));

var _WafActiveRule = _interopRequireDefault(require("./WafActiveRule"));

var _WafActiveRuleData = _interopRequireDefault(require("./WafActiveRuleData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IncludedWithWafFirewallVersionItem model module.
 * @module model/IncludedWithWafFirewallVersionItem
 * @version 3.0.0-alpha1
 */
var IncludedWithWafFirewallVersionItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedWithWafFirewallVersionItem</code>.
   * @alias module:model/IncludedWithWafFirewallVersionItem
   * @implements module:model/SchemasWafFirewallVersion
   * @implements module:model/WafActiveRule
   */
  function IncludedWithWafFirewallVersionItem() {
    _classCallCheck(this, IncludedWithWafFirewallVersionItem);

    _SchemasWafFirewallVersion["default"].initialize(this);

    _WafActiveRule["default"].initialize(this);

    IncludedWithWafFirewallVersionItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IncludedWithWafFirewallVersionItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IncludedWithWafFirewallVersionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncludedWithWafFirewallVersionItem} obj Optional instance to populate.
     * @return {module:model/IncludedWithWafFirewallVersionItem} The populated <code>IncludedWithWafFirewallVersionItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedWithWafFirewallVersionItem();

        _SchemasWafFirewallVersion["default"].constructFromObject(data, obj);

        _WafActiveRule["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _WafActiveRuleData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return IncludedWithWafFirewallVersionItem;
}();
/**
 * @member {module:model/WafActiveRuleData} data
 */


IncludedWithWafFirewallVersionItem.prototype['data'] = undefined; // Implement SchemasWafFirewallVersion interface:

/**
 * @member {module:model/SchemasWafFirewallVersionData} data
 */

_SchemasWafFirewallVersion["default"].prototype['data'] = undefined; // Implement WafActiveRule interface:

/**
 * @member {module:model/WafActiveRuleData} data
 */

_WafActiveRule["default"].prototype['data'] = undefined;
var _default = IncludedWithWafFirewallVersionItem;
exports["default"] = _default;