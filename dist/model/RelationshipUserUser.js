"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipUserUserData = _interopRequireDefault(require("./RelationshipUserUserData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipUserUser model module.
 * @module model/RelationshipUserUser
 * @version 3.0.0-alpha1
 */
var RelationshipUserUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipUserUser</code>.
   * @alias module:model/RelationshipUserUser
   */
  function RelationshipUserUser() {
    _classCallCheck(this, RelationshipUserUser);

    RelationshipUserUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipUserUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipUserUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipUserUser} obj Optional instance to populate.
     * @return {module:model/RelationshipUserUser} The populated <code>RelationshipUserUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipUserUser();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _RelationshipUserUserData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipUserUser;
}();
/**
 * @member {module:model/RelationshipUserUserData} data
 */


RelationshipUserUser.prototype['data'] = undefined;
var _default = RelationshipUserUser;
exports["default"] = _default;