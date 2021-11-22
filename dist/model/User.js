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
 * The User model module.
 * @module model/User
 * @version 3.0.0-alpha1
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   */
  function User() {
    _classCallCheck(this, User);

    User.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('limit_services')) {
          obj['limit_services'] = _ApiClient["default"].convertToType(data['limit_services'], 'Boolean');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('require_new_password')) {
          obj['require_new_password'] = _ApiClient["default"].convertToType(data['require_new_password'], 'Boolean');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _RoleUser["default"].constructFromObject(data['role']);
        }

        if (data.hasOwnProperty('two_factor_auth_enabled')) {
          obj['two_factor_auth_enabled'] = _ApiClient["default"].convertToType(data['two_factor_auth_enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('two_factor_setup_required')) {
          obj['two_factor_setup_required'] = _ApiClient["default"].convertToType(data['two_factor_setup_required'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * The login associated with the user (typically, an email address).
 * @member {String} login
 */


User.prototype['login'] = undefined;
/**
 * The real life name of the user.
 * @member {String} name
 */

User.prototype['name'] = undefined;
/**
 * Indicates that the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */

User.prototype['limit_services'] = undefined;
/**
 * Indicates whether the is account is locked for editing or not.
 * @member {Boolean} locked
 */

User.prototype['locked'] = undefined;
/**
 * Indicates if a new password is required at next login.
 * @member {Boolean} require_new_password
 */

User.prototype['require_new_password'] = undefined;
/**
 * @member {module:model/RoleUser} role
 */

User.prototype['role'] = undefined;
/**
 * Indicates if 2FA is enabled on the user.
 * @member {Boolean} two_factor_auth_enabled
 */

User.prototype['two_factor_auth_enabled'] = undefined;
/**
 * Indicates if 2FA is required by the user's customer account.
 * @member {Boolean} two_factor_setup_required
 */

User.prototype['two_factor_setup_required'] = undefined;
var _default = User;
exports["default"] = _default;