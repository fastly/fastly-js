"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipMemberWafRule = _interopRequireDefault(require("./RelationshipMemberWafRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafRuleWafRule model module.
 * @module model/RelationshipWafRuleWafRule
 * @version 3.0.0-alpha1
 */
var RelationshipWafRuleWafRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafRuleWafRule</code>.
   * @alias module:model/RelationshipWafRuleWafRule
   */
  function RelationshipWafRuleWafRule() {
    _classCallCheck(this, RelationshipWafRuleWafRule);

    RelationshipWafRuleWafRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafRuleWafRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafRuleWafRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafRuleWafRule} obj Optional instance to populate.
     * @return {module:model/RelationshipWafRuleWafRule} The populated <code>RelationshipWafRuleWafRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafRuleWafRule();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_RelationshipMemberWafRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafRuleWafRule;
}();
/**
 * @member {Array.<module:model/RelationshipMemberWafRule>} data
 */


RelationshipWafRuleWafRule.prototype['data'] = undefined;
var _default = RelationshipWafRuleWafRule;
exports["default"] = _default;