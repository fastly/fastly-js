"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafRuleRevision = _interopRequireDefault(require("./TypeWafRuleRevision"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberWafRuleRevision model module.
 * @module model/RelationshipMemberWafRuleRevision
 * @version 3.0.0-alpha1
 */
var RelationshipMemberWafRuleRevision = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberWafRuleRevision</code>.
   * @alias module:model/RelationshipMemberWafRuleRevision
   */
  function RelationshipMemberWafRuleRevision() {
    _classCallCheck(this, RelationshipMemberWafRuleRevision);

    RelationshipMemberWafRuleRevision.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberWafRuleRevision, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberWafRuleRevision</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberWafRuleRevision} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberWafRuleRevision} The populated <code>RelationshipMemberWafRuleRevision</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberWafRuleRevision();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRuleRevision["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberWafRuleRevision;
}();
/**
 * @member {module:model/TypeWafRuleRevision} type
 */


RelationshipMemberWafRuleRevision.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

RelationshipMemberWafRuleRevision.prototype['id'] = undefined;
var _default = RelationshipMemberWafRuleRevision;
exports["default"] = _default;