"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafTag = _interopRequireDefault(require("./TypeWafTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberWafTag model module.
 * @module model/RelationshipMemberWafTag
 * @version 3.0.0-alpha1
 */
var RelationshipMemberWafTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberWafTag</code>.
   * @alias module:model/RelationshipMemberWafTag
   */
  function RelationshipMemberWafTag() {
    _classCallCheck(this, RelationshipMemberWafTag);

    RelationshipMemberWafTag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberWafTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberWafTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberWafTag} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberWafTag} The populated <code>RelationshipMemberWafTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberWafTag();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafTag["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberWafTag;
}();
/**
 * Alphanumeric string identifying a WAF tag.
 * @member {String} id
 */


RelationshipMemberWafTag.prototype['id'] = undefined;
/**
 * @member {module:model/TypeWafTag} type
 */

RelationshipMemberWafTag.prototype['type'] = undefined;
var _default = RelationshipMemberWafTag;
exports["default"] = _default;