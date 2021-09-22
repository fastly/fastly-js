"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipMemberWafRuleRevision = _interopRequireDefault(require("./RelationshipMemberWafRuleRevision"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafRuleRevisionWafRuleRevisions model module.
 * @module model/RelationshipWafRuleRevisionWafRuleRevisions
 * @version 3.0.0-alpha1
 */
var RelationshipWafRuleRevisionWafRuleRevisions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafRuleRevisionWafRuleRevisions</code>.
   * @alias module:model/RelationshipWafRuleRevisionWafRuleRevisions
   */
  function RelationshipWafRuleRevisionWafRuleRevisions() {
    _classCallCheck(this, RelationshipWafRuleRevisionWafRuleRevisions);

    RelationshipWafRuleRevisionWafRuleRevisions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafRuleRevisionWafRuleRevisions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafRuleRevisionWafRuleRevisions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafRuleRevisionWafRuleRevisions} obj Optional instance to populate.
     * @return {module:model/RelationshipWafRuleRevisionWafRuleRevisions} The populated <code>RelationshipWafRuleRevisionWafRuleRevisions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafRuleRevisionWafRuleRevisions();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_RelationshipMemberWafRuleRevision["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafRuleRevisionWafRuleRevisions;
}();
/**
 * @member {Array.<module:model/RelationshipMemberWafRuleRevision>} data
 */


RelationshipWafRuleRevisionWafRuleRevisions.prototype['data'] = undefined;
var _default = RelationshipWafRuleRevisionWafRuleRevisions;
exports["default"] = _default;