"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafRule = _interopRequireDefault(require("./TypeWafRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberWafRule model module.
 * @module model/RelationshipMemberWafRule
 * @version 3.0.0-alpha1
 */
var RelationshipMemberWafRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberWafRule</code>.
   * @alias module:model/RelationshipMemberWafRule
   */
  function RelationshipMemberWafRule() {
    _classCallCheck(this, RelationshipMemberWafRule);

    RelationshipMemberWafRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberWafRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberWafRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberWafRule} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberWafRule} The populated <code>RelationshipMemberWafRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberWafRule();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRule["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberWafRule;
}();
/**
 * Alphanumeric string identifying a WAF rule.
 * @member {String} id
 */


RelationshipMemberWafRule.prototype['id'] = undefined;
/**
 * @member {module:model/TypeWafRule} type
 */

RelationshipMemberWafRule.prototype['type'] = undefined;
var _default = RelationshipMemberWafRule;
exports["default"] = _default;