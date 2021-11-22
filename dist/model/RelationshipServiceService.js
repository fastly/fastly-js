"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipMemberService = _interopRequireDefault(require("./RelationshipMemberService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipServiceService model module.
 * @module model/RelationshipServiceService
 * @version 3.0.0-alpha1
 */
var RelationshipServiceService = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipServiceService</code>.
   * @alias module:model/RelationshipServiceService
   */
  function RelationshipServiceService() {
    _classCallCheck(this, RelationshipServiceService);

    RelationshipServiceService.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipServiceService, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipServiceService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipServiceService} obj Optional instance to populate.
     * @return {module:model/RelationshipServiceService} The populated <code>RelationshipServiceService</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipServiceService();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_RelationshipMemberService["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RelationshipServiceService;
}();
/**
 * @member {Array.<module:model/RelationshipMemberService>} data
 */


RelationshipServiceService.prototype['data'] = undefined;
var _default = RelationshipServiceService;
exports["default"] = _default;