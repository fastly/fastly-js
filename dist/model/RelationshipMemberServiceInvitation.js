"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeServiceInvitation = _interopRequireDefault(require("./TypeServiceInvitation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberServiceInvitation model module.
 * @module model/RelationshipMemberServiceInvitation
 * @version 3.0.0-alpha1
 */
var RelationshipMemberServiceInvitation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberServiceInvitation</code>.
   * @alias module:model/RelationshipMemberServiceInvitation
   */
  function RelationshipMemberServiceInvitation() {
    _classCallCheck(this, RelationshipMemberServiceInvitation);

    RelationshipMemberServiceInvitation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberServiceInvitation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberServiceInvitation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberServiceInvitation} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberServiceInvitation} The populated <code>RelationshipMemberServiceInvitation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberServiceInvitation();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeServiceInvitation["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberServiceInvitation;
}();
/**
 * @member {module:model/TypeServiceInvitation} type
 */


RelationshipMemberServiceInvitation.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a service invitation.
 * @member {String} id
 */

RelationshipMemberServiceInvitation.prototype['id'] = undefined;
var _default = RelationshipMemberServiceInvitation;
exports["default"] = _default;