"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeService = _interopRequireDefault(require("./TypeService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberService model module.
 * @module model/RelationshipMemberService
 * @version 3.0.0-alpha1
 */
var RelationshipMemberService = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberService</code>.
   * @alias module:model/RelationshipMemberService
   */
  function RelationshipMemberService() {
    _classCallCheck(this, RelationshipMemberService);

    RelationshipMemberService.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberService, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberService} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberService} The populated <code>RelationshipMemberService</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberService();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeService["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberService;
}();
/**
 * @member {module:model/TypeService} type
 */


RelationshipMemberService.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */

RelationshipMemberService.prototype['id'] = undefined;
var _default = RelationshipMemberService;
exports["default"] = _default;