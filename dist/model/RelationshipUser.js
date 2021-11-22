"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipUserUser = _interopRequireDefault(require("./RelationshipUserUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipUser model module.
 * @module model/RelationshipUser
 * @version 3.0.0-alpha1
 */
var RelationshipUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipUser</code>.
   * @alias module:model/RelationshipUser
   */
  function RelationshipUser() {
    _classCallCheck(this, RelationshipUser);

    RelationshipUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipUser} obj Optional instance to populate.
     * @return {module:model/RelationshipUser} The populated <code>RelationshipUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipUser();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _RelationshipUserUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipUser;
}();
/**
 * @member {module:model/RelationshipUserUser} user
 */


RelationshipUser.prototype['user'] = undefined;
var _default = RelationshipUser;
exports["default"] = _default;