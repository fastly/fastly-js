"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForInvitation = _interopRequireDefault(require("./RelationshipsForInvitation"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationResponseDataAllOf model module.
 * @module model/InvitationResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var InvitationResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationResponseDataAllOf</code>.
   * @alias module:model/InvitationResponseDataAllOf
   */
  function InvitationResponseDataAllOf() {
    _classCallCheck(this, InvitationResponseDataAllOf);

    InvitationResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/InvitationResponseDataAllOf} The populated <code>InvitationResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationResponseDataAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _Timestamps["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForInvitation["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return InvitationResponseDataAllOf;
}();
/**
 * Alphanumeric string identifying an invitation.
 * @member {String} id
 */


InvitationResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

InvitationResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForInvitation} relationships
 */

InvitationResponseDataAllOf.prototype['relationships'] = undefined;
var _default = InvitationResponseDataAllOf;
exports["default"] = _default;