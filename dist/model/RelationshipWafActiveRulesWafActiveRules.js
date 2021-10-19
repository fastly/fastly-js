"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipMemberWafActiveRule = _interopRequireDefault(require("./RelationshipMemberWafActiveRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafActiveRulesWafActiveRules model module.
 * @module model/RelationshipWafActiveRulesWafActiveRules
 * @version 3.0.0-alpha1
 */
var RelationshipWafActiveRulesWafActiveRules = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafActiveRulesWafActiveRules</code>.
   * @alias module:model/RelationshipWafActiveRulesWafActiveRules
   */
  function RelationshipWafActiveRulesWafActiveRules() {
    _classCallCheck(this, RelationshipWafActiveRulesWafActiveRules);

    RelationshipWafActiveRulesWafActiveRules.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafActiveRulesWafActiveRules, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafActiveRulesWafActiveRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafActiveRulesWafActiveRules} obj Optional instance to populate.
     * @return {module:model/RelationshipWafActiveRulesWafActiveRules} The populated <code>RelationshipWafActiveRulesWafActiveRules</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafActiveRulesWafActiveRules();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_RelationshipMemberWafActiveRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafActiveRulesWafActiveRules;
}();
/**
 * @member {Array.<module:model/RelationshipMemberWafActiveRule>} data
 */


RelationshipWafActiveRulesWafActiveRules.prototype['data'] = undefined;
var _default = RelationshipWafActiveRulesWafActiveRules;
exports["default"] = _default;