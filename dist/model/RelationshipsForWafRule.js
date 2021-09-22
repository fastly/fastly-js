"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafRuleRevisionWafRuleRevisions = _interopRequireDefault(require("./RelationshipWafRuleRevisionWafRuleRevisions"));

var _RelationshipWafRuleRevisions = _interopRequireDefault(require("./RelationshipWafRuleRevisions"));

var _RelationshipWafTags = _interopRequireDefault(require("./RelationshipWafTags"));

var _RelationshipWafTagsWafTags = _interopRequireDefault(require("./RelationshipWafTagsWafTags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForWafRule model module.
 * @module model/RelationshipsForWafRule
 * @version 3.0.0-alpha1
 */
var RelationshipsForWafRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForWafRule</code>.
   * @alias module:model/RelationshipsForWafRule
   */
  function RelationshipsForWafRule() {
    _classCallCheck(this, RelationshipsForWafRule);

    RelationshipsForWafRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForWafRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForWafRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForWafRule} obj Optional instance to populate.
     * @return {module:model/RelationshipsForWafRule} The populated <code>RelationshipsForWafRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForWafRule();

        if (data.hasOwnProperty('waf_tags')) {
          obj['waf_tags'] = _RelationshipWafTagsWafTags["default"].constructFromObject(data['waf_tags']);
        }

        if (data.hasOwnProperty('waf_rule_revisions')) {
          obj['waf_rule_revisions'] = _RelationshipWafRuleRevisionWafRuleRevisions["default"].constructFromObject(data['waf_rule_revisions']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForWafRule;
}();
/**
 * @member {module:model/RelationshipWafTagsWafTags} waf_tags
 */


RelationshipsForWafRule.prototype['waf_tags'] = undefined;
/**
 * @member {module:model/RelationshipWafRuleRevisionWafRuleRevisions} waf_rule_revisions
 */

RelationshipsForWafRule.prototype['waf_rule_revisions'] = undefined;
var _default = RelationshipsForWafRule;
exports["default"] = _default;