"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipServiceService = _interopRequireDefault(require("./RelationshipServiceService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipServices model module.
 * @module model/RelationshipServices
 * @version 3.0.0-alpha1
 */
var RelationshipServices = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipServices</code>.
   * @alias module:model/RelationshipServices
   */
  function RelationshipServices() {
    _classCallCheck(this, RelationshipServices);

    RelationshipServices.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipServices, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipServices} obj Optional instance to populate.
     * @return {module:model/RelationshipServices} The populated <code>RelationshipServices</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipServices();

        if (data.hasOwnProperty('services')) {
          obj['services'] = _RelationshipServiceService["default"].constructFromObject(data['services']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipServices;
}();
/**
 * @member {module:model/RelationshipServiceService} services
 */


RelationshipServices.prototype['services'] = undefined;
var _default = RelationshipServices;
exports["default"] = _default;