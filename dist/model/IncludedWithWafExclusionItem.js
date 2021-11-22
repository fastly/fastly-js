"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafRuleRevision = _interopRequireDefault(require("./TypeWafRuleRevision"));

var _WafRule = _interopRequireDefault(require("./WafRule"));

var _WafRuleRevision = _interopRequireDefault(require("./WafRuleRevision"));

var _WafRuleRevisionAttributes = _interopRequireDefault(require("./WafRuleRevisionAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IncludedWithWafExclusionItem model module.
 * @module model/IncludedWithWafExclusionItem
 * @version 3.0.0-alpha1
 */
var IncludedWithWafExclusionItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedWithWafExclusionItem</code>.
   * @alias module:model/IncludedWithWafExclusionItem
   * @implements module:model/WafRule
   * @implements module:model/WafRuleRevision
   */
  function IncludedWithWafExclusionItem() {
    _classCallCheck(this, IncludedWithWafExclusionItem);

    _WafRule["default"].initialize(this);

    _WafRuleRevision["default"].initialize(this);

    IncludedWithWafExclusionItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IncludedWithWafExclusionItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IncludedWithWafExclusionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncludedWithWafExclusionItem} obj Optional instance to populate.
     * @return {module:model/IncludedWithWafExclusionItem} The populated <code>IncludedWithWafExclusionItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedWithWafExclusionItem();

        _WafRule["default"].constructFromObject(data, obj);

        _WafRuleRevision["default"].constructFromObject(data, obj);

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

  return IncludedWithWafExclusionItem;
}();
/**
 * @member {module:model/TypeWafRuleRevision} type
 */


IncludedWithWafExclusionItem.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

IncludedWithWafExclusionItem.prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */

IncludedWithWafExclusionItem.prototype['attributes'] = undefined; // Implement WafRule interface:

/**
 * @member {module:model/TypeWafRule} type
 */

_WafRule["default"].prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule.
 * @member {String} id
 */

_WafRule["default"].prototype['id'] = undefined;
/**
 * @member {module:model/WafRuleAttributes} attributes
 */

_WafRule["default"].prototype['attributes'] = undefined; // Implement WafRuleRevision interface:

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
var _default = IncludedWithWafExclusionItem;
exports["default"] = _default;