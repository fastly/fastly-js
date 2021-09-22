"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafRuleWafRule = _interopRequireDefault(require("./RelationshipWafRuleWafRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafRule model module.
 * @module model/RelationshipWafRule
 * @version 3.0.0-alpha1
 */
var RelationshipWafRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafRule</code>.
   * @alias module:model/RelationshipWafRule
   */
  function RelationshipWafRule() {
    _classCallCheck(this, RelationshipWafRule);

    RelationshipWafRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafRule} obj Optional instance to populate.
     * @return {module:model/RelationshipWafRule} The populated <code>RelationshipWafRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafRule();

        if (data.hasOwnProperty('waf_rule')) {
          obj['waf_rule'] = _RelationshipWafRuleWafRule["default"].constructFromObject(data['waf_rule']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafRule;
}();
/**
 * @member {module:model/RelationshipWafRuleWafRule} waf_rule
 */


RelationshipWafRule.prototype['waf_rule'] = undefined;
var _default = RelationshipWafRule;
exports["default"] = _default;