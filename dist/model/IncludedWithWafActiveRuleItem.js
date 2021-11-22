"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasWafFirewallVersion = _interopRequireDefault(require("./SchemasWafFirewallVersion"));

var _SchemasWafFirewallVersionData = _interopRequireDefault(require("./SchemasWafFirewallVersionData"));

var _TypeWafRuleRevision = _interopRequireDefault(require("./TypeWafRuleRevision"));

var _WafRuleRevision = _interopRequireDefault(require("./WafRuleRevision"));

var _WafRuleRevisionAttributes = _interopRequireDefault(require("./WafRuleRevisionAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IncludedWithWafActiveRuleItem model module.
 * @module model/IncludedWithWafActiveRuleItem
 * @version 3.0.0-alpha1
 */
var IncludedWithWafActiveRuleItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedWithWafActiveRuleItem</code>.
   * @alias module:model/IncludedWithWafActiveRuleItem
   * @implements module:model/SchemasWafFirewallVersion
   * @implements module:model/WafRuleRevision
   */
  function IncludedWithWafActiveRuleItem() {
    _classCallCheck(this, IncludedWithWafActiveRuleItem);

    _SchemasWafFirewallVersion["default"].initialize(this);

    _WafRuleRevision["default"].initialize(this);

    IncludedWithWafActiveRuleItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IncludedWithWafActiveRuleItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IncludedWithWafActiveRuleItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncludedWithWafActiveRuleItem} obj Optional instance to populate.
     * @return {module:model/IncludedWithWafActiveRuleItem} The populated <code>IncludedWithWafActiveRuleItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedWithWafActiveRuleItem();

        _SchemasWafFirewallVersion["default"].constructFromObject(data, obj);

        _WafRuleRevision["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _SchemasWafFirewallVersionData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRuleRevision["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafRuleRevisionAttributes["default"].constructFromObject(data['attributes']);
        }
      }

      return obj;
    }
  }]);

  return IncludedWithWafActiveRuleItem;
}();
/**
 * @member {module:model/SchemasWafFirewallVersionData} data
 */


IncludedWithWafActiveRuleItem.prototype['data'] = undefined;
/**
 * @member {module:model/TypeWafRuleRevision} type
 */

IncludedWithWafActiveRuleItem.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

IncludedWithWafActiveRuleItem.prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */

IncludedWithWafActiveRuleItem.prototype['attributes'] = undefined; // Implement SchemasWafFirewallVersion interface:

/**
 * @member {module:model/SchemasWafFirewallVersionData} data
 */

_SchemasWafFirewallVersion["default"].prototype['data'] = undefined; // Implement WafRuleRevision interface:

/**
 * @member {module:model/TypeWafRuleRevision} type
 */

_WafRuleRevision["default"].prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

_WafRuleRevision["default"].prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */

_WafRuleRevision["default"].prototype['attributes'] = undefined;
var _default = IncludedWithWafActiveRuleItem;
exports["default"] = _default;