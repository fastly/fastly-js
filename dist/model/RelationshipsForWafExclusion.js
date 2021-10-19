"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafRuleRevisionWafRuleRevisions = _interopRequireDefault(require("./RelationshipWafRuleRevisionWafRuleRevisions"));

var _RelationshipWafRuleRevisions = _interopRequireDefault(require("./RelationshipWafRuleRevisions"));

var _RelationshipWafRuleWafRule = _interopRequireDefault(require("./RelationshipWafRuleWafRule"));

var _RelationshipWafRules = _interopRequireDefault(require("./RelationshipWafRules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForWafExclusion model module.
 * @module model/RelationshipsForWafExclusion
 * @version 3.0.0-alpha1
 */
var RelationshipsForWafExclusion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForWafExclusion</code>.
   * @alias module:model/RelationshipsForWafExclusion
   */
  function RelationshipsForWafExclusion() {
    _classCallCheck(this, RelationshipsForWafExclusion);

    RelationshipsForWafExclusion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForWafExclusion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForWafExclusion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForWafExclusion} obj Optional instance to populate.
     * @return {module:model/RelationshipsForWafExclusion} The populated <code>RelationshipsForWafExclusion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForWafExclusion();

        if (data.hasOwnProperty('waf_rules')) {
          obj['waf_rules'] = _RelationshipWafRuleWafRule["default"].constructFromObject(data['waf_rules']);
        }

        if (data.hasOwnProperty('waf_rule_revisions')) {
          obj['waf_rule_revisions'] = _RelationshipWafRuleRevisionWafRuleRevisions["default"].constructFromObject(data['waf_rule_revisions']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForWafExclusion;
}();
/**
 * @member {module:model/RelationshipWafRuleWafRule} waf_rules
 */


RelationshipsForWafExclusion.prototype['waf_rules'] = undefined;
/**
 * @member {module:model/RelationshipWafRuleRevisionWafRuleRevisions} waf_rule_revisions
 */

RelationshipsForWafExclusion.prototype['waf_rule_revisions'] = undefined;
var _default = RelationshipsForWafExclusion;
exports["default"] = _default;