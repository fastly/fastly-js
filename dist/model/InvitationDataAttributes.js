"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RoleUser = _interopRequireDefault(require("./RoleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InvitationDataAttributes model module.
 * @module model/InvitationDataAttributes
 * @version 3.0.0-alpha1
 */
var InvitationDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InvitationDataAttributes</code>.
   * @alias module:model/InvitationDataAttributes
   */
  function InvitationDataAttributes() {
    _classCallCheck(this, InvitationDataAttributes);

    InvitationDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InvitationDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InvitationDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvitationDataAttributes} obj Optional instance to populate.
     * @return {module:model/InvitationDataAttributes} The populated <code>InvitationDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InvitationDataAttributes();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('limit_services')) {
          obj['limit_services'] = _ApiClient["default"].convertToType(data['limit_services'], 'Boolean');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _RoleUser["default"].constructFromObject(data['role']);
        }

        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InvitationDataAttributes;
}();
/**
 * The email address of the invitee.
 * @member {String} email
 */


InvitationDataAttributes.prototype['email'] = undefined;
/**
 * Indicates the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */

InvitationDataAttributes.prototype['limit_services'] = undefined;
/**
 * @member {module:model/RoleUser} role
 */

InvitationDataAttributes.prototype['role'] = undefined;
/**
 * Indicates whether or not the invitation is active.
 * @member {module:model/InvitationDataAttributes.StatusCodeEnum} status_code
 */

InvitationDataAttributes.prototype['status_code'] = undefined;
/**
 * Allowed values for the <code>status_code</code> property.
 * @enum {Number}
 * @readonly
 */

InvitationDataAttributes['StatusCodeEnum'] = {
  /**
   * value: 0
   * @const
   */
  "inactive": 0,

  /**
   * value: 1
   * @const
   */
  "active": 1
};
var _default = InvitationDataAttributes;
exports["default"] = _default;